import React from "react";
import styles from "@/app/ui/dashboard/user/singleUser/singleUser.module.css";
import Image from "next/image";
function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avator.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
      <form className={styles.form}>
        <label>Usename</label>
        <input type="text" name="username" placeholder="John Doe" />
        <label>Email</label>
        <input type="email" name="email" placeholder="John@gmail.com" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Phone</label>
        <input type="phone" name="phone" placeholder="+9125655658" />
        <label>Address</label>
        <textarea name="address" placeholder="New York"></textarea>
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleUserPage;
