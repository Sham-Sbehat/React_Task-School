import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import styles from './Student.module.scss';

export default function Student() {
  const { id } = useParams(); // from URL like /student/123
  const location = useLocation();
  const student = location.state?.student;

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire({
        title: 'Missing Information!',
        text: 'Both fields must be filled!',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      return;
    }

    Swal.fire({
      title: 'Student Info Submitted 🎓',
      html: `<strong>Email:</strong> ${formData.email}<br/><strong>Password:</strong> ${formData.password}`,
      icon: 'success',
      confirmButtonText: 'Got it!',
      customClass: {
        popup: 'swal-popup',
        title: 'swal-title',
        htmlContainer: 'swal-text',
      }
    });
  };

  return (
    <div className={styles.studentPage}>
      <h1 className={styles.title}>Student Page</h1>

      {student ? (
        <>
          <h2 className={styles.studentId}>👨‍🎓 Student_Name: {student.name}</h2>
          <h3 className={styles.studentMajor}>📘 Major: {student.major}</h3>
          <h4 className={styles.studentNumber}>🆔 Student_ID: {id}</h4>
        </>
      ) : (
        <h4 className={styles.studentNumber}>🆔 Student_ID: {id}</h4>
      )}

      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <button className={styles.button} type="submit">Sign In</button>
      </form>
    </div>
  );
}
