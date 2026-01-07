# Solution Architecture
---

![RiverMeadow Solution Architecture](/img/rivermeadow_aws_architecture.png)
<center>**RiverMeadow Platform Architecture**</center>

## Solution Components

The RiverMeadow solution architecture includes the following components:

### SaaS Platform

The RiverMeadow SaaS platform is the 

The RiverMeadow SaaS platform is responsible for migration orchestration, logging, and notifications. Web UI (migrate.rivermeadow.com) and REST API for interacting with the RiverMeadow platform.

### Migration Appliance

The RiverMeadow migration appliance is a virtual appliance (virtual machine) that is deployed into the target HPE Morpheus VM Esssentials or HPE Morpheus Enterprise on an HVM cluster environment. The appliance is responsible for local migration orchestration operations such as provisioning HVM instances via the Morpheus REST API in tandem with RiverMeadow platform.

### Source Worker Appliance

A virtual appliance (virtual machine) that is deployed into the source VMware vSphere cluster. The source worker appliance is responsible for mounting VMware virtual machine snapshots and facilitating the data transfer to target workers running on the HVM hypervisor. The appliance is automatically deployed into the source VMware vSphere environment from the migration appliance.

### Migration Utility

The RiverMeadow migration utility is a lightweight utility (less than 25 MB) that is deployed to the source Windows or Linux systems for OS based migrations. The utility is responsible for data transfer to the target worker and enables optimization and modernization on the clone once the initial data sync (migration) has been completed. The utility does not require a reboot of the source system and can be automatically removed following the completion of the migration or modernization. The utility runs as a service on the system and listens on port 5994 for incoming requests from the RiverMeadow migration appliance or target worker.

### Target Worker

A minimal image that is mounted on the target instance or virtual machine during the migration process (initial and delta). Responsible for transferring data from the source workload and preparing the system for the target cloud or hypervisor.

