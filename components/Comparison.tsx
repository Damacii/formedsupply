import styles from "./Comparison.module.css";

export default function Comparison() {
  return (
    <section className={styles.comparison} aria-labelledby="comparison-title">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Comparison</p>
          <h2 id="comparison-title">Formed vs them</h2>
        </div>
        <div
          className={styles.tableWrap}
          role="region"
          aria-label="Formed Supply comparison table"
          data-reveal
        >
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Formed Supply</th>
                <th scope="col">Online Print Shops</th>
                <th scope="col">Random Local Printer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Proof before print</th>
                <td>Yes</td>
                <td>Limited</td>
                <td>Varies</td>
              </tr>
              <tr>
                <th scope="row">Food-business focus</th>
                <td>Yes</td>
                <td>No</td>
                <td>Sometimes</td>
              </tr>
              <tr>
                <th scope="row">Reorder consistency</th>
                <td>Saved specs</td>
                <td>Manual reupload</td>
                <td>Varies</td>
              </tr>
              <tr>
                <th scope="row">Turnaround options</th>
                <td>Standard + rush</td>
                <td>Standard only</td>
                <td>Limited</td>
              </tr>
              <tr>
                <th scope="row">One point of contact</th>
                <td>Dedicated</td>
                <td>No</td>
                <td>Maybe</td>
              </tr>
              <tr>
                <th scope="row">Print + packaging in one place</th>
                <td>Yes</td>
                <td>Partial</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.comparisonCta}>
          <a className="btn btn-primary" href="#lead">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
