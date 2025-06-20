import React, { useState } from 'react';
import type { Interest } from '../types/user';
import '../styles/ProfilePages.css';

interface ProfileEditProps {
  profile: any;
  availableInterests: Interest[];
  initialFormData: {
    username: string;
    birthDate: string;
    bio: string;
    status: string;
    city: string;
    password: string;
  };
  initialInterests: string[];
  initialAvatarUrl: string;
  isLoading: boolean;
  onSubmit: (data: {
    username: string;
    birthDate: string;
    bio: string;
    status: string;
    city: string;
    password: string;
    avatarFile: File | null;
    avatarUrl: string | null;
    interests: string[];
  }) => void;
  onCancel: () => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({
  profile,
  availableInterests,
  initialFormData,
  initialInterests,
  initialAvatarUrl,
  isLoading,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarUrlInput, setAvatarUrlInput] = useState(initialAvatarUrl);
  const [useUrlForAvatar, setUseUrlForAvatar] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [interestInput, setInterestInput] = useState(initialInterests.join(', '));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAvatarUrlInput(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        setLocalError('Invalid file format. Allowed formats: JPG, PNG, GIF');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setLocalError('File size too large. Maximum size is 5MB');
        return;
      }

      setAvatarFile(file);
      setLocalError(null);
    }
  };

  const toggleAvatarSource = () => {
    setUseUrlForAvatar(!useUrlForAvatar);
    setAvatarFile(null);
    setAvatarUrlInput(profile?.avatarUrl || '');
    setLocalError(null);
  };

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (useUrlForAvatar && avatarUrlInput && !validateUrl(avatarUrlInput)) {
      setLocalError('Please enter a valid URL');
      return;
    }

    const interests = interestInput
      .split(',')
      .map(name => name.trim())
      .filter(name => name.length > 0);

    onSubmit({
      ...formData,
      avatarFile,
      avatarUrl: useUrlForAvatar ? avatarUrlInput : null,
      interests
    });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      {localError && <div className="error-message">{localError}</div>}

      <div className="form-group">
        <label className="form-label">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          minLength={3}
          maxLength={20}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Avatar Source</label>
        <div className="avatar-source-toggle">
          <button
            type="button"
            onClick={toggleAvatarSource}
            className={`toggle-button ${!useUrlForAvatar ? 'active' : ''}`}
          >
            Upload File
          </button>
          <button
            type="button"
            onClick={toggleAvatarSource}
            className={`toggle-button ${useUrlForAvatar ? 'active' : ''}`}
          >
            Use URL
          </button>
        </div>

        {!useUrlForAvatar ? (
          <label className="file-upload">
            <input
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/gif"
              onChange={handleFileChange}
              className="file-input"
            />
            <span className="file-upload-button">Choose File</span>
            {avatarFile && (
              <span className="file-name">{avatarFile.name}</span>
            )}
          </label>
        ) : (
          <input
            type="url"
            value={avatarUrlInput}
            onChange={handleUrlChange}
            placeholder="Enter image URL"
            className="form-input"
          />
        )}
      </div>

      <div className="form-group">
        <label className="form-label">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="form-textarea"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Status Message</label>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Interests (comma separated)</label>
        <input
          type="text"
          value={interestInput}
          onChange={(e) => setInterestInput(e.target.value)}
          placeholder="Enter interests, e.g. Music, Sports"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="form-label">New Password (leave empty to keep current)</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter new password or leave empty"
          className="form-input"
        />
      </div>

      <div className="form-actions">
        <button
          type="submit"
          disabled={isLoading}
          className="save-button"
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="cancel-button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileEdit;