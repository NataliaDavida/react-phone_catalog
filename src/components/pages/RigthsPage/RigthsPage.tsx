import styles from './RigthsPage.module.scss';

export const RightsPage = () => {
  return (
    <div className={styles.rights}>
      <h2>Intellectual Property & Terms of Use</h2>

      <div className={styles.rights__content}>
        <p>
          Welcome to NICE GADGETS. This page outlines the legal terms and
          copyright policies governing the use of our website.
        </p>

        <ol className={styles.rights__list}>
          <li>
            <h3>Copyright & Ownership</h3>
            <p>
              All content displayed on this website, including but not limited to text,
              graphics, logos, images, UI design, and source code, is the exclusive
              property of NICE GADGETS and is protected by international copyright laws.
            </p>
            <p>
              Any unauthorized copying, reproduction, or distribution of this material
              for commercial purposes is strictly prohibited.
            </p>
          </li>

          <li>
            <h3>Trademarks</h3>
            <p>
              The "NICE GADGETS" name and logo are trademarks of our company.
              All other product names, logos, and brands (e.g., Apple, Samsung, Sony)
              are property of their respective owners and are used on this site
              solely for identification purposes.
            </p>
          </li>

          <li>
            <h3>Disclaimer of Liability</h3>
            <p>
              While we strive for absolute accuracy, NICE GADGETS does not guarantee
              that product descriptions, pricing, or specifications are entirely free of errors.
              Product images are for illustrative purposes only, and actual products may
              vary slightly due to screen calibration differences.
            </p>
          </li>
        </ol>

        <div className={styles.rights__footer}>
          <p>
            <strong>Need Help?</strong> For any legal inquiries or permission to use our
            media assets, please reach out to us via{' '}
            <a href="mailto:davyda.nataliya@gmail.com" className={styles.rights__link}>
              Contacts
            </a>.
          </p>
          <p className={styles.rights__copy}>
            © 2026 NICE GADGETS. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
