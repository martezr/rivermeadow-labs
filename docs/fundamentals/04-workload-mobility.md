# Workload Mobility
---

Migrations 

## Mobility Features

### Pre-flight Migration Checks

200+ integrated pre-flight migration checks are executed at various stages of the migration process to provide visibility into common issues that can prevent a successful migration.

![Preflight Migration Checks](./preflight_migration_checks.png)

### Integrated Automation

Automated removal of existing virtualization tooling (i.e. - VMware tools, Virtio drivers, etc.) and installation of virtualization tooling applicable to the target platform.

![Integrated Post Migration Automation](./integrated_post_migration_automation.png)

### Custom Automation

Automate post migration tasks such as agent removal or installation using the integrated automation engine.


Benefits

* Near Zero Downtime Migrations:
* Reduced migration time

## Migration Sources
The RiverMeadow platform migrating workloads from effectively any source including physical servers, virtual machines, and public cloud instances.

* Physical servers
* Virtual machines
* Cloud instances

## Migration Targets
RiverMeadow supports an extensive list of target platforms from public clouds to on-premises virtualization platforms.

<details>
  <summary>**Public Cloud**</summary>

  The RiverMeadow platform supports the most popular public cloud IaaS solutions including cloud hosted versions of hypervisors from vendors such as Red Hat, Nutanix, and VMware to address various use cases.

| Name | Description | Type |
|:------:|-------------|------|
| [**AWS EC2**](https://aws.amazon.com/ec2/)| | Public Cloud IaaS |
| [**Elastic VMware Service (EVS)**](https://aws.amazon.com/evs/) | | Cloud Hosted Hypervisor |
| [**Nutanix Cloud Clusters (NC2) on AWS**](https://www.nutanix.com/products/nutanix-cloud-clusters/aws) | | Cloud Hosted Hypervisor |
| **Red Hat OpenShift on AWS (ROSA)** | AWS and Red Hat managed| Cloud Hosted Hypervisor |
| **Microsoft Azure** | | Public Cloud IaaS |
| **Azure VMware Solution (AVS)** | | Cloud Hosted Hypervisor |
| [**Nutanix Cloud Clusters (NC2) on Azure**](https://www.nutanix.com/products/nutanix-cloud-clusters/azure) | | Cloud Hosted Hypervisor |
| **Azure Red Hat OpenShift (ARO)** | | Cloud Hosted Hypervisor |
| **Google Compute Engine (GCE)** | | Public Cloud IaaS |
| **Google Cloud VMware Engine (GCVE)** | | Cloud Hosted Hypervisor |
| **OpenShift Dedicated** |A rackscale hybrid cloud solution from AWS that provides an AWS managed turnkey on-premises solution integrated with the AWS cloud hosted control plane|Cloud Hosted Hypervisor|
| [**Nutanix Cloud Clusters (NC2) on Google Cloud**](https://www.nutanix.com/products/nutanix-cloud-clusters/google-cloud) | | |

</details>

<details>
  <summary>**Private Cloud**</summary>

  This is the detailed content

| Name | Description | Type |
|:------:|-------------|------|
| **AWS Outposts Racks**| A rackscale hybrid cloud solution from AWS that provides an AWS managed turnkey on-premises solution integrated with the AWS cloud hosted control plane | Hybrid Cloud |
| **Nutanix AHV** | | On-Premises Hypervisor |
| **Red Hat OpenShift Virtualization** | | On-Premises Hypervisor |
| **Microsoft Hyper-V** | | On-Premises Hypervisor |
| **Microsoft Azure Local** | A hybrid cloud solution from Microsoft that provides a local virtualization solution connected to a cloud hosted control plane | Hybrid Cloud |
| **HPE Morpheus VM Essentials** | | On-Premises Hypervisor |
| **VMware vSphere** | | On-Premises Hypervisor |

</details>