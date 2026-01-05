# Workload Mobility
---

Migrations 

## Mobility Features

### Preflight Migration Checks

200+ integrated preflight migration checks are executed at various stages of the migration process to provide visibility into common issues that can prevent a successful migration.

![Preflight Migration Checks](./preflight_migration_checks.png)
<center>**Preflight Migration Checks**</center>

### Integrated Automation

Automated removal of existing virtualization tooling (i.e. - VMware tools, Virtio drivers, etc.) and installation of virtualization tooling applicable to the target platform.

![Integrated Post Migration Automation](./integrated_post_migration_automation.png)
<center>**Integrated Automation**</center>

### Custom Automation

Automate post migration tasks such as agent removal or installation using the integrated automation engine.

**Benefits**

* **Near Zero Downtime Migrations:** Migrations are completed with minimal downtime (minutes) which reduces the overall impact and risk to the business.
* Reduced migration time

## Migration Sources
The RiverMeadow platform migrating workloads from effectively any source including physical servers, virtual machines, and public cloud instances.

* Physical servers
* Virtual machines
* Cloud instances

## Migration Targets
RiverMeadow provides a single unified platform to migrate workloads to over a dozen public clouds to on-premises virtualization platforms. This extensive support allows a single platform to be utilized for hybrid migrations that include multiple migration targets (i.e. - AWS, Azure, and Red Hat OpenShift).

<details>
  <summary>**Public Cloud Targets**</summary>

  The RiverMeadow platform supports the most popular public cloud IaaS solutions including cloud hosted versions of hypervisors from vendors such as Red Hat, Nutanix, and VMware to address various use cases.

| Name | Description | Type |
|:------:|-------------|:------:|
| [**AWS EC2**](https://aws.amazon.com/ec2/)| Amazon Elastic Compute Cloud (Amazon EC2) provides on-demand, scalable computing capacity in the Amazon Web Services (AWS) Cloud. | Public Cloud IaaS |
| [**Elastic VMware Service (EVS)**](https://aws.amazon.com/evs/) | Amazon EVS is a native AWS service to run VMware Cloud Foundation (VCF) within your Amazon Virtual Private Cloud (Amazon VPC) | Cloud Hosted Hypervisor |
| [**Nutanix Cloud Clusters (NC2) on AWS**](https://www.nutanix.com/products/nutanix-cloud-clusters/aws) | | Cloud Hosted Hypervisor |
| [**Red Hat OpenShift on AWS (ROSA)**](https://www.redhat.com/en/technologies/cloud-computing/openshift/aws) | A fully managed turnkey application platform that allows organizations to increase operational efficiency, refocus on innovation, and quickly build, deploy, and scale applications in a native AWS environment. | Cloud Hosted Hypervisor |
| [**Microsoft Azure**](https://azure.microsoft.com/en-us) | | Public Cloud IaaS |
| [**Azure VMware Solution (AVS)**](https://azure.microsoft.com/en-us/products/azure-vmware) | Azure VMware Solution provides private clouds that contain VMware vSphere clusters built from dedicated bare-metal Azure infrastructure. | Cloud Hosted Hypervisor |
| [**Nutanix Cloud Clusters (NC2) on Azure**](https://www.nutanix.com/products/nutanix-cloud-clusters/azure) | | Cloud Hosted Hypervisor |
| [**Azure Red Hat OpenShift (ARO)**](https://www.redhat.com/en/technologies/cloud-computing/openshift/azure) | A fully managed turnkey application platform that helps organizations increase operational efficiency, focus on innovation, and quickly build, deploy, and scale applications. | Cloud Hosted Hypervisor |
| [**Google Compute Engine (GCE)**](https://cloud.google.com/products/compute) | Compute Engine is a computing and hosting service that lets you create and run virtual machines on Google infrastructure. | Public Cloud IaaS |
| [**Google Cloud VMware Engine (GCVE)**](https://cloud.google.com/vmware-engine) | A fully managed service letting businesses run their VMware environments (vSphere, vCenter, vSAN) directly on Google Cloud's bare-metal infrastructure, enabling seamless migration and modernization of existing apps without rewriting them, integrating familiar VMware tools with powerful Google Cloud services. | Cloud Hosted Hypervisor |
| [**OpenShift Dedicated**](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) | Red Hat® OpenShift® Dedicated is a managed Red Hat OpenShift offering, available on Google Cloud. | Cloud Hosted Hypervisor|
| [**Nutanix Cloud Clusters (NC2) on Google Cloud**](https://www.nutanix.com/products/nutanix-cloud-clusters/google-cloud) | NC2 now extends NCP into the Google Cloud ecosystem, providing a true hybrid multicloud infrastructure stack. |Cloud Hosted Hypervisor|

</details>

<details>
  <summary>**Private Cloud Targets**</summary>

  The RiverMeadow platform supports the most popular private cloud or on-premises solutions including VMware alternatives from vendors such as Red Hat, Nutanix, Microsoft, HPE, and others.

| Name | Description | Type |
|:------:|-------------|------|
| [**AWS Outposts Racks**](https://aws.amazon.com/outposts/rack/) | A rackscale hybrid cloud solution from AWS that provides an AWS managed turnkey on-premises solution integrated with the AWS cloud hosted control plane | Hybrid Cloud |
| [**Nutanix AHV**](https://www.nutanix.com/products/ahv) | Nutanix AHV is a modern and secure virtualization platform that powers VMs for applications in the datacenter, at the edge and in public clouds. | On-Premises Hypervisor |
| [**Red Hat OpenShift Virtualization**](https://www.redhat.com/en/technologies/cloud-computing/openshift/virtualization) | Red Hat® OpenShift® Virtualization, an included feature of Red Hat OpenShift, provides a modern, unified platform for organizations to run and deploy their new and existing virtual machine (VM) workloads. | On-Premises Hypervisor |
| [**Microsoft Hyper-V**](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview) | Hyper-V is Microsoft's enterprise-grade hypervisor technology built into Windows Server and Windows. | On-Premises Hypervisor |
| [**Microsoft Azure Local**](https://azure.microsoft.com/en-us/products/local) | Azure Local is Microsoft's distributed infrastructure solution that extends Azure capabilities to customer-owned environments. | Hybrid Cloud |
| [**HPE Morpheus VM Essentials**](https://www.hpe.com/us/en/morpheus-vm-essentials-software.html) | HPE Morpheus VM Essentials is a VMware alternative that simplifies virtualization, cuts costs, and unifies VMware & HVM cluster management. | On-Premises Hypervisor |
| [**VMware vSphere**](https://www.vmware.com/products/cloud-infrastructure/vsphere) | Enterprise workload engine to optimize IT infrastructure, run both virtual machines and Kubernetes clusters, and deploy HCI. | On-Premises Hypervisor |

</details>