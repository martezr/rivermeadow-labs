# Service Account Configuration
---
In order to use the RiverMeadow platform to migrate workloads to HPE Morpheus VM Esssentials, the platform must be granted the required role permissions. Security best practice is to create a dedicated service account for the RiverMeadow migration appliance to interact with the Morpheus REST API.

### User Role

Privileges or permissions within HPE Morpheus VM Essentials and HPE Morpheus Enterprise are associated with a user role for assignment. A dedicated RiverMeadow user role should be created to align with least privilege security best practices.

### User Account

2. Create a user account and assign the user role created in the previous step.


### Role Privileges

The following privileges are required

| Privilege | Access Level |
|--------------------|--------------------------|
| Backup Settings |	Full |
| Environment Settings | Full |
| Provisioning Settings | Full |
| Roles | Full |
| Service Plans	| Read |
| Clusters | Full |
| Compute | Full |
| Groups | Full |
| Networks | Read |
| Storage | Read |
| Virtual Images | Full |
| Power Control | Full |
| Reconfigure | Full |
| Reconfigure: Change Plan | Full |
| Reconfigure: Disk Add | Full |
| Reconfigure: Disk Change Type	| Full |
| Reconfigure: Disk Modify | Full |
| Reconfigure: Disk Remove | Full |
| Reconfigure: Network Add | Full |
| Reconfigure: Network Modify | Full |
| Reconfigure: Network Remove | Full |
| Retry/Cancel | Full |
| Activity | Read |
| Dashboard | Read |
| Import Image | Full |
| Instances: Add | Full |
| Instances: Clone | Full |
| Instances: Delete | Full |
| Instances: Edit | Full |
| Instances: List | Full |
| Instances: Settings | Full |
| Remote Console | User |
| Snapshots | Full |
| Snapshots: Linked Clone	| Full |



:::tip

The most current version of the required privileges is available in the RiverMeadow documentation: [https://docs.rivermeadow.com/hpe-vme-required-privileges](https://docs.rivermeadow.com/hpe-vme-required-privileges).

:::