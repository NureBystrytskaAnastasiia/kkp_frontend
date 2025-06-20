import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAuth';
import { fetchChallenges, completeChallenge } from '../../store/slices/usechallengesSlice';
import '../../styles/Challenges.css';

const ChallengesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const { challenges, loading, error } = useAppSelector((state) => state.userChallenges);

  useEffect(() => {
    if (token) {
      dispatch(fetchChallenges(token));
    }
  }, [dispatch, token]);

  const handleCompleteChallenge = async (challengeId: number) => {
    if (!token) return;

    try {
      await dispatch(completeChallenge({ challengeId, token })).unwrap();
      dispatch(fetchChallenges(token));
    } catch (err) {
      console.error('Не вдалося завершити завдання:', err);
    }
  };

  if (loading) return <div className="challenges-message">Завантаження завдань...</div>;
  if (error) return <div className="challenges-error">Помилка: {error}</div>;
  if (challenges.length === 0) return <div className="challenges-message">Немає доступних завдань</div>;

  return (
    <div className="challenges-page">
      <h2 className="challenges-title">Доступні завдання</h2>
      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div 
            key={challenge.challengeId}
            className={`challenge-card ${challenge.completedAt ? 'completed' : ''}`}
          >
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
            <p><strong>Нагорода:</strong> {challenge.reward} балів</p>
            {challenge.completedAt ? (
              <span className="challenge-status">✓ Завершено</span>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => handleCompleteChallenge(challenge.challengeId)}
              >
                Завершити завдання
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesList;
