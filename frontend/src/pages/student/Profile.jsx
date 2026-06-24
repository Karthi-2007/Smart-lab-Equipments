import "./Student.css";

function Profile() {
  return (
    <div className="student-page">

      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account information and activity.</p>
      </div>

      <div className="profile-card">

        <div className="profile-top">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="profile-image"
          />

          <div>
            <h2>Karthikeyan S</h2>
            <span className="role-badge">
              Student
            </span>
          </div>

        </div>

        <div className="profile-details">

          <div className="detail-item">
            <h4>Register Number</h4>
            <p>717824226</p>
          </div>

          <div className="detail-item">
            <h4>Department</h4>
            <p>Information Technology</p>
          </div>

          <div className="detail-item">
            <h4>Email</h4>
            <p>karthikeyan@gmail.com</p>
          </div>

          <div className="detail-item">
            <h4>Phone</h4>
            <p>+91 9876543210</p>
          </div>

        </div>

        <div className="appraisal-section">

          <h3>Appraisal Score</h3>

          <div className="score-circle">
            89
          </div>

          <p className="excellent">
            Excellent Equipment Usage
          </p>

        </div>

        <div className="profile-stats">

          <div className="stat-card">
            <h3>12</h3>
            <p>Total Bookings</p>
          </div>

          <div className="stat-card">
            <h3>54</h3>
            <p>Usage Hours</p>
          </div>

          <div className="stat-card">
            <h3>2</h3>
            <p>Fault Reports</p>
          </div>

          <div className="stat-card">
            <h3>95%</h3>
            <p>Booking Discipline</p>
          </div>

        </div>

        <div className="profile-buttons">

          <button className="edit-btn">
            Edit Profile
          </button>

          <button className="password-btn">
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;