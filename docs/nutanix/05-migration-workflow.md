# Migration Workflow
---
Migrations using the RiverMeadow platform follow

1. **Target Environment IAM Setup:** The RiverMeadow SaaS platform is granted IAM permission to the target Nutanix environment to facilitate the migration appliance deployment and target instance instantiation.
2. **Migration Appliance Deployment:** The RiverMeadow migration appliance is deployed into the target Nutanix environment to facilitate local migration orchestration and migration log collection.
3. **Source Worker Appliance Deployment (Optional):** For VM based or agentless migrations the RiverMeadow source worker appliance is deployed into the source VMware vSphere environment to facilitate snapshot based data replication to the target environment.
4. **OS Agent Installation (Optional):** For OS or agent based migrations the RiverMeadow agent is installed on the source Windows and Linux systems that will be migrated to facilitate data replication and enable advanced optimization and modernization capabilities.
5. **Source Onboarding:** The RiverMeadow source inventory is populated with entries of the source systems that will be migrated and the entries are grouped into "move groups".
6. **Initial Data Sync:** An initial migration profile is created to define where a source workload will be migrated and what additional RiverMeadow features will be used.
7. **Incremental Data Syncs (Delta Migration):** Once the initial data sync has been performed
8. **User Acceptance Testing (UAT):** 
9. **Stop Source Workload Services:** As part of the final cutover event for the workload, the system's services are stopped to prevent any data changes and ensure data consistency for the final delta migration.
10. **Delta Migration:** A final delta migration is performed to sync the last bits of data from the source workload to the target instance and the source workload is shutdown following the sync to prevent conflicts.
11. **Post Cutover Events:** Things like DNS updates, security group changes, etc. 