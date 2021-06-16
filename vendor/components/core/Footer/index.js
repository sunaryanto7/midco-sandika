import classNames from 'classnames';
const Footer = ({ className }) => {
  return (
    <>
      <div className={classNames("footer", className)}>
        <div className={"footer_block"}>
          <div className={"footer_title"}>
            <h3>Sandika</h3>
          </div>
          <div className={"footer_content"}>
            <p>
              Sandika adalah salah satu perusahaan ritel terkemuka yang telah hadir memberikan
              kemudahan dan kenyamanan dalam berbelanja selama puluhan tahun untuk masyarakat
              Indonesia yang terpusat di Jawa Barat dan Jawa Tengah. Berbekal pengalaman tersebut
              dan kemauan untuk terus berkembang memberikan yang terbaik bagi pelanggan setianya,
              lahirlah Yogya Online, toko online yang menjual puluhan ribu pilihan produk kebutuhan
              sehari-hari dengan kategori yang beragam.
            </p>
          </div>
        </div>
        <div className={"footer_block"}>
          <div className={"footer_title"}>
            <h3>About</h3>
          </div>
          <div className={"footer_content"}>
            <ul>
              <li><a className="pwa-link" href="/customer/account">My Account</a></li>
              <li><a className="pwa-link" href="/checkout/cart">My Cart</a></li>
              <li><a className="pwa-link" href="/wishlist">Wishlist</a></li>
              <li><a className="pwa-link" href="/checkout">Checkout</a></li>
              <li><a className="pwa-link" href="/sales/order/track">Tracking Info</a></li>
              <li><a className="pwa-link" href="/faq" type="cms">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className={"footer_block"}>
          <div className={"footer_title"}>
            <h3>Information</h3>
          </div>
          <div className={"footer_content"}>
            <ul>
              <li><a className="pwa-link" href="/about-us" type="cms">About Us</a></li>
              <li><a className="pwa-link" href="/brands">Brands</a></li>
              <li><a className="pwa-link" href="/blog">Blog</a></li>
              <li><a className="pwa-link" href="/privacy-policy-cookie-restriction-mode" type="cms">Privacy Policy</a></li>
              <li><a className="pwa-link" href="/shipping-policy" type="cms">Shipping &amp; Delivery Policy</a></li>
              <li><a className="pwa-link" href="/disclaimer" type="cms">Disclaimer</a></li>
              <li><a className="pwa-link" href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className={"footer_block footer_socialmedia"}>
          <div className={"footer_title"}>
            <h3>Follow Us</h3>
          </div>
          <div className={"footer_content"}>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Pembayaran</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
