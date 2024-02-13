import React from "react";
import styles from "@/app/ui/dashboard/product/singleProduct/singleProduct.module.css";
import Image from "next/image";
function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avator.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
      <form className={styles.form}>
        <label>Title</label>
        <input type="text" name="title" placeholder="title" />
        <label>Price</label>
        <input type="number" name="price" placeholder="$100" />
        <label>Stock</label>
        <input type="number" name="stock"  />
        <label>Color</label>
        <input type="text" name="color" placeholder="red" />
        <label>Size</label>
        <input type="number" name="size"  />
       
        <label>Category</label>
        <select name="cat" id="cat">
          <option value='kitchen'>Kitchen</option>
          <option value='computer'>Computer</option>
        </select>
        <label>Description</label>
        <textarea name="desc" placeholder="description"></textarea>
        <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;
