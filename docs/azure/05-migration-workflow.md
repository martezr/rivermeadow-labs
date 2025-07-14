# Migration Workflow
---
The following steps detail the general migration workflow for migrating workloads using the RiverMeadow platform.

1. **Target Environment IAM Setup:** The RiverMeadow SaaS platform is granted IAM permission to the target Azure environment to enable the migration appliance deployment and target instance instantiation.
2. **Migration Appliance Deployment:** The RiverMeadow migration appliance is deployed into the target Azure environment to enable local migration orchestration and migration log collection.
3. **Source Worker Appliance Deployment (Optional):** For VM based or agentless migrations the RiverMeadow source worker appliance is deployed into the source VMware vSphere environment to enable snapshot based data replication to the target environment.
4. **OS Agent Installation (Optional):** For OS or agent based migrations the RiverMeadow agent is installed on the source Windows and Linux systems that will be migrated to enable data replication and advanced optimization and modernization capabilities.
5. **Source Onboarding:** The RiverMeadow source inventory is populated with entries of the source systems that will be migrated and the entries are grouped into "move groups" to align with waves defined during wave planning.
6. **Initial Data Sync:** An initial migration profile is created to define where a source workload will be migrated and what additional RiverMeadow features will be used during the migration.
7. **Incremental Data Syncs (Delta Migration):** Once the initial data sync has been performed, incremental data syncs or delta migrations can be scheduled to keep the source and target workloads as close to in sync as possible leading up to the final cutover event.
8. **User Acceptance Testing (UAT):** Testing of the migrated workloads is performed prior to the final cutover to ensure that applications and services function as expected in the target Azure environment. Workloads are placed into isolation at the network level (i.e. - security groups) to prevent any impact with the source environment.
9. **Stop Source Workload Services:** As part of the final cutover event for the workload, the system's services are stopped to prevent any data changes and ensure data consistency for the final delta migration.
10. **Delta Migration:** A final delta migration is performed to sync the last bits of data from the source workload to the target instance and the source workload is shutdown following the sync to prevent conflicts.
11. **Post Cutover Events:** Once the last delta migration has been performed then any post cutover tasks such as DNS updates, security group changes, and more need to be performed.
12. **Final Validation Testing:** With all of the migration steps completed, perform comprehensive validation testing to ensure that all applications and services are functioning correctly in the target Azure environment. Address any issues identified during testing before declaring the migration complete.