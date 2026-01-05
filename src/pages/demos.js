import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import VMwareMigration from '/img/demo_vmware_migration.png';
import AWSMigration from '/img/demo_aws_migration.png';


//import React from 'react';
import Heading from '@theme/Heading';
import styles from './index.module.css';

import React from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          RiverMeadow Product Demos
        </Heading>
        <p className="hero__subtitle">Take a Guided Tour of the RiverMeadow Workload Mobility Platform — Explore key product capabilities with an interactive, point-and-click experience.</p>
</div>
    </header>
  );
}

const demos = [
  {
    title: 'VM Migrations to VMware vSphere',
    description: 'Experience a guided demo of migrating virtual machines to VMware vSphere using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: VMwareMigration,
    iframeSrc: 'https://rivermeadow.storylane.io/demo/esajh5kbgml7?embed=popup',
    categories: ['vmware', "workload mobility"],
  },
    {
    title: 'Cloud Migrations to AWS',
    description: 'Experience a guided demo of migrating workloads to Amazon Web Services (AWS) using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient cloud mobility.',
    image: AWSMigration,
    iframeSrc: 'https://rivermeadow.storylane.io/demo/s7ci5jeropfx?embed=popup',
    categories: ['aws', "workload mobility"],
  },
    {
    title: 'Cloud Migrations to Microsoft Azure',
    description: 'Experience a guided demo of migrating workloads to Microsoft Azure using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient cloud mobility.',
    image: 'https://www.techzine.eu/wp-content/uploads/2020/06/nutanix-prism.png',
  },
  {
    title: 'Cloud Migrations to Google Cloud Platform',
    description: 'Experience a guided demo of migrating workloads to Google Cloud Platform (GCP) using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient cloud mobility.',
    image: 'https://www.techzine.eu/wp-content/uploads/2020/06/nutanix-prism.png',
  },
  {
    title: 'VM Migrations to HPE Morpheus VM Essentials',
    description: 'Experience a guided demo of migrating workloads to HPE Morpheus VM Essentials using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: 'https://www.techzine.eu/wp-content/uploads/2020/06/nutanix-prism.png',
  },
  {
    title: 'VM Migrations to Microsofot Hyper-V',
    description: 'Experience a guided demo of migrating workloads to Microsoft Hyper-V using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: 'https://www.techzine.eu/wp-content/uploads/2020/06/nutanix-prism.png',
  },
  {
    title: 'VM Migrations to Nutanix AHV',
    description: 'Experience a guided demo of migrating workloads to Nutanix AHV using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: 'https://www.techzine.eu/wp-content/uploads/2020/06/nutanix-prism.png',
  },
  {
    title: 'VM Migrations to Red Hat OpenShift',
    description: 'Experience a guided demo of migrating workloads to Red Hat OpenShift using the RiverMeadow platform. Explore the seamless process and key features that facilitate efficient workload mobility.',
    image: 'https://www.techzine.eu/wp-content/uploads/2020/06/nutanix-prism.png',
  },
  // Add additional demos as needed
];



function DemoCardWithModal({demoTitle, demoDescription, demoImage, demoIframeSrc}) {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <div className="workshop-card" style={{ padding: '0px'}}>
                <div className="workshop-card-image" style={{ borderTopRightRadius: '6px', borderTopLeftRadius: '6px'}}>
                    <img src={demoImage} alt={demoTitle} style={{ objectFit: 'cover',borderTopRightRadius: '6px', borderTopLeftRadius: '6px' }} />
                </div>
                <div className="workshop-card-content" style={{ padding: '16px' }}>
                    <div className="workshop-card-logo">
                        <h3>{demoTitle}</h3>
                    </div>
                    <div className="workshop-card-description">
                        <span className="workshop-card-text">
                            {demoDescription}
                        </span>
                        <p>workload mobility</p>
                    </div>
                    <button
                        className="button button--primary"
                        style={{ marginTop: 16, width: '100%', backgroundColor: '#0A76FD', borderColor: '#0A76FD' }}
                        onClick={() => setOpen(true)}
                    >
                        Launch Demo
                    </button>
                </div>
            </div>
            {open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div
                        style={{
                            background: '#fff',
                            padding: 8,
                            width: '80%',
                            borderRadius: 8,
                            boxShadow: '0 2px 16px rgba(0,0,0,0.2)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
                        <h2 style={{ margin: 0 }}>{demoTitle}</h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button
                                className="button button--secondary"
                                onClick={() => setOpen(false)}
                                style={{backgroundColor: '#0A76FD', borderColor: '#0A76FD', color: '#FFFFFF'}}
                            >
                                Close
                            </button>
                        </div>
                        </div>
<div>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed" style={{position:'relative',paddingBottom:'calc(62.76% + 0px)',width:'100%',height:0,transform:'scale(1)'}}>
    <iframe loading="lazy" className="sl-demo" src={demoIframeSrc} name="sl-embed" allow="fullscreen" allowfullscreen style={{position:'absolute',top:0,left:0,width:'100%!important',height:'100%!important',border:'1px solid rgba(63,95,172,0.35)',boxShadow:'0px 0px 18px rgba(26, 19, 72, 0.15)',boxSizing:'border-box'}}></iframe>
  </div>
</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="RiverMeadow Product Demos"
      description="Start learning how to migrate, optimize and modernize workloads using the RiverMeadow workload mobility platform.">
      <HomepageHeader />
      <main style={{padding: 24 +'px'}}>
        <div className="homecontent">
          <div className="workshops">
            <div>
              <h1 nav-label="General" id="general">Interactive Demos</h1>
              <p>Migrate Windows and Linux workloads from any physical, virtual, or cloud environment to one of the public clouds supported by the RiverMeadow platform.</p>
              <ul className="cards-grid-list">
                {demos.map((demo, index) => (
                  <li key={index}>
                    <DemoCardWithModal demoTitle={demo.title} demoDescription={demo.description} demoImage={demo.image} demoIframeSrc={demo.iframeSrc}  />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
          <div style={{backgroundColor: '#0A76FD', width: '80%', height:'200px', borderRadius: '8px', marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF'}}>
            <p>Test</p>
          </div>
       {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
