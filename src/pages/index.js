import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import AWS from '/img/aws.svg';
import Azure from '/img/azure.svg';
import HPE from '/img/hpe.svg';

//import React from 'react';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
</div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style={{padding: 24 +'px'}}>
        <div className="homecontent">
          <div className="jumpsection">
            <h3>Jump to Section</h3>
            <ul>
              <li><a href='#publiccloud'>Public Cloud</a></li>
              <li><a href='#privatecloud'>Private Cloud</a></li>
            </ul>
          </div>
          <div className="workshops">
            <div>
              <h1 nav-label="Public Cloud" id="publiccloud">Public Cloud</h1>
              <p>Migrate Windows and Linux workloads from any physical, virtual, or cloud environment to one of the public clouds supported by the RiverMeadow platform.</p>
              <ul className="cards-grid-list">
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/rivermeadow-labs/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <span className="logo-image">
                          <AWS />
                        </span>
                        <span className="workshop-card-header">Amazon Web Services (AWS)</span>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to AWS utilizing the RiverMeadow platform.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - Azure" className="card-link-anchor" href="/rivermeadow-labs/docs/azure/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <span className="logo-image">
                          <Azure />
                        </span>
                        <span className="workshop-card-header">Microsoft Azure</span>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Microsoft Azure utilizing the RiverMeadow platform.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - Google Cloud" className="card-link-anchor" href="/rivermeadow-labs/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <span className="workshop-card-header">Google Cloud</span>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Google Cloud utilizing the RiverMeadow platform.</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h1 nav-label="Private Cloud" id="privatecloud">Private Cloud</h1>
              <p>Migrate Windows and Linux workloads from any physical, virtual, or cloud environment to one of the private clouds supported by the RiverMeadow platform.</p>
              <ul className="cards-grid-list">
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/rivermeadow-labs/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <span className="logo-image">
                          <HPE />
                        </span>
                        <span className="workshop-card-header">HPE Morpheus VM Essentials</span>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to HPE Morpheus VM Essentials utilizing the RiverMeadow platform.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - Red Hat OpenShift" className="card-link-anchor" href="/rivermeadow-labs/docs/red-hat-openshift/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <span className="workshop-card-header">Red Hat OpenShift</span>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Red Hat OpenShift utilizing the RiverMeadow platform.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - Nutanix" className="card-link-anchor" href="/rivermeadow-labs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <span className="workshop-card-header">Nutanix AHV</span>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Learn how to migrate, optimize and modernize workloads to Nutanix AHV utilizing the RiverMeadow platform.</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
       {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
