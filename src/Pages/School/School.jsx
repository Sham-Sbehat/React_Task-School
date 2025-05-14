import { useNavigate } from 'react-router-dom';
import styles from './School.module.scss';

export default function School() {
  const navigate = useNavigate();

  const handleClick = (student) => {
    navigate('/student', { state: { student } });
  };

  const students = [
    { id: 1, name: 'Sham', major: 'CSE' },
    { id: 2, name: 'Ahmad', major: 'English' },
    { id: 3, name: 'Aya', major: 'Accounting' },
  ];

  return (
    <div className={styles.schoolPage}>
      <h1 className={styles.title}>School Page</h1>

      <div className={styles.buttonsWrapper}>
        {students.map((student) => (
          <button
            key={student.id}
            className={styles.button}
            onClick={() => handleClick(student)}
          >
            {student.name} - {student.major}
          </button>
        ))}
      </div>
    </div>
  );
}
