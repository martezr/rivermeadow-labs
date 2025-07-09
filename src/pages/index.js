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
            <a href='#publiccloud'>
              Demo
            </a>
            <a href='#privatecloud'>
              Test
            </a>
          </div>
          <div className="workshops">
            <div>
              <h1 nav-label="Public Cloud" id="publiccloud">Public Cloud</h1>
              <p>Migrate workloads to the public  cloud</p>
              <ul className="cards-grid-list">
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <span className="logo-image">
                          <AWS />
                        </span>
                        <span className="workshop-card-header">Amazon Web Services (AWS)</span>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Create, manage, and destroy AWS infrastructure using Terraform. Step-by-step, command-line tutorials will walk you through the Terraform basics for the first time.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <span className="logo-image">
                          <Azure />
                        </span>
                        <span className="workshop-card-header">Microsoft Azure</span>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Create, manage, and destroy AWS infrastructure using Terraform. Step-by-step, command-line tutorials will walk you through the Terraform basics for the first time.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <img className="workshop-card-logo-image" src="/img/google-cloud.png" alt="Siamese cat"/>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Create, manage, and destroy AWS infrastructure using Terraform. Step-by-step, command-line tutorials will walk you through the Terraform basics for the first time.</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h1 nav-label="Private Cloud" id="privatecloud">Private Cloud</h1>
              <p>Migrate Windows and Linux workloads from any physical, virtual, or cloud environment to an on-premises virtualization solution.</p>
              <ul className="cards-grid-list">
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
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
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <img className="workshop-card-logo-image" src="/img/microsoft-azure.png" alt="Siamese cat"/>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Create, manage, and destroy AWS infrastructure using Terraform. Step-by-step, command-line tutorials will walk you through the Terraform basics for the first time.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <img className="workshop-card-logo-image" src="/img/google-cloud.png" alt="Siamese cat"/>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Create, manage, and destroy AWS infrastructure using Terraform. Step-by-step, command-line tutorials will walk you through the Terraform basics for the first time.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <img className="workshop-card-logo-image" src="/img/aws.png" alt="Siamese cat"/>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Create, manage, and destroy AWS infrastructure using Terraform. Step-by-step, command-line tutorials will walk you through the Terraform basics for the first time.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/azure/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <img className="workshop-card-logo-image" src="/img/microsoft-azure.png" alt="Siamese cat"/>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Create, manage, and destroy AWS infrastructure using Terraform. Step-by-step, command-line tutorials will walk you through the Terraform basics for the first time.</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="workshop-card">
                    <a aria-label="Get Started - AWS" className="card-link-anchor" href="/docs/aws/introduction"><span aria-hidden="true">&nbsp;</span></a>
                    <div className="workshop-card-content">
                      <div className="workshop-card-logo">
                        <img className="workshop-card-logo-image" src="/img/google-cloud.png" alt="Siamese cat"/>
                      </div>
                      <div className="workshop-card-description">
                        <span className="workshop-card-text">Create, manage, and destroy AWS infrastructure using Terraform. Step-by-step, command-line tutorials will walk you through the Terraform basics for the first time.</span>
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
