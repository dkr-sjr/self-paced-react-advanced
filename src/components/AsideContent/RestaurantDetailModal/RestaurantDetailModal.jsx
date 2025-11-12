import styles from '../RestaurantModal.module.css';
import Modal from '../Modal/Modal';

export default function RestaurantDetailModal({ isVisible, closeModal, restaurantInfo }) {
  if (!isVisible) return null;
  return (
    <Modal onClickBackdrop={closeModal} title={restaurantInfo.name}>
      <div className={styles.restaurantInfo}>
        <p className={`${styles.restaurantInfoDescription} text-body`}>{restaurantInfo.description}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button type="button" className={`${styles.button} ${styles.buttonPrimary} text-caption`} onClick={closeModal}>닫기</button>
      </div>
    </Modal>
  );
}
