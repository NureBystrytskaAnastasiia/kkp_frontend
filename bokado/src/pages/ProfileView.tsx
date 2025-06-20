import React from 'react';
import type { UserProfile } from '../types/user';
import '../styles/ProfilePages.css';

interface ProfileViewProps {
  profile: UserProfile;
  detailedInfo?: any;
  isOwnProfile: boolean;
  onEditClick: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({
  profile,
  detailedInfo,
  isOwnProfile,
  onEditClick
}) => {
  return (
    <div className="profile-view">
      <div className="profile-header">
        <div className="avatar-container">
          {profile.avatarUrl ? (
            <div className="avatar-wrapper">
              <img
                src={profile.avatarUrl.startsWith('http') ? profile.avatarUrl : `https://localhost:7192${profile.avatarUrl}`}
                alt="Avatar"
                className="profile-avatar"
              />
              {profile.isPremium && (
                <div className="premium-crown">👑</div>
              )}
            </div>
          ) : (
            <div className="avatar-placeholder">
              {profile.username.charAt(0).toUpperCase()}
              {profile.isPremium && (
                <div className="premium-crown">👑</div>
              )}
            </div>
          )}
        </div>
        <div className="profile-main-info">
          <h2 className="username">
            {profile.username}
            {profile.isPremium && <span className="premium-badge">Premium</span>}
            {profile.isAdmin && <span className="admin-badge">Admin</span>}
          </h2>
          <p className="member-since">
            Member since {new Date(profile.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="profile-details-grid">
        <div className="detail-card">
          <h3 className="detail-title">About</h3>
          {profile.bio ? (
            <p className="bio-text">{profile.bio}</p>
          ) : (
            <p className="bio-text placeholder">No bio provided</p>
          )}
        </div>

        <div className="detail-card">
          <h3 className="detail-title">Details</h3>
          <div className="detail-row">
            <span className="detail-label">Birth Date:</span>
            <span className="detail-value">{new Date(profile.birthDate).toLocaleDateString()}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Level:</span>
            <span className="detail-value level-value">{profile.level}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Status:</span>
            <span className="detail-value">{profile.isPremium ? 'Premium' : 'Regular'}</span>
          </div>
          {profile.city && (
            <div className="detail-row">
              <span className="detail-label">City:</span>
              <span className="detail-value">{profile.city}</span>
            </div>
          )}
        </div>

        {detailedInfo?.userInterests?.length > 0 && (
          <div className="detail-card interests-card">
            <h3 className="detail-title">Interests</h3>
            <div className="interests-display">
              {detailedInfo.userInterests.map((interest: { interestId: number; name: string }) => (
                <span key={interest.interestId} className="interest-tag">
                  {interest.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {detailedInfo && (
          <div className="detail-card">
            <h3 className="detail-title">Contact</h3>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{detailedInfo.email}</span>
            </div>
            {detailedInfo.friends?.length > 0 && (
              <div className="detail-row">
                <span className="detail-label">Friends:</span>
                <span className="detail-value">
                  {detailedInfo.friends.length} friends
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="profile-actions">
        {isOwnProfile ? (
          <button onClick={onEditClick} className="edit-button">
            Edit Profile
          </button>
        ) : (
          <button className="message-button">
            Send Message
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileView;