import Link from "next/link";
import HomeStyles from "../styles/Home.module.css"
const OrderFormLinkBtn = () => {
    return (
        <div className={HomeStyles.formlink}>
        <Link href="/no-more-curbside">
          <button type="button">
            <h2>Click here to place an order</h2>
          </button>
        </Link>
      </div>
    );
  };
  
  export default OrderFormLinkBtn;