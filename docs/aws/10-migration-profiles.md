# Migration Profiles
---
The migration profile defines the plan or configuration for migrating a workload from the source environment to the target environment.

### Placement Settings
The details



![](/img/rivermeadow_migration_profile_aws.png)

| Name | Description |
|------|-------------|
| **Region**| The target AWS region for the migrated server |
| **Instance Type** | The AWS instance type used for the EC2 instance the source server is migrated to |
| **Tenancy**       |  |
| **Instance Tags** | The instance tags to associate with the target EC2 instance |
| **Volume Type** |  |
| **VPC** | The VPC where the target EC2 instance will be deployed |
| **Subnet** | The Subnet that the ENI(s) attached to the target EC2 instance will be associated with  |



### Optimization Settings

| Name | Description |
|------|-------------|
| **NetBIOS Name (Windows Only)**| The target AWS region for the migrated server |
| **KMS Activation (Windows Only)** | The AWS instance type used for the EC2 instance the source server is migrated to |
| **Sysprep (Windows Only)**       |  |
| **Storage Rightsizing** | The instance tags associated with the EC2 instance |
| **Migration Extension** | The instance tags associated with the EC2 instance |

### Modernization Settings

| Name | Description |
|------|-------------|
| **OS Modernization**| The operating system version to upgrade the target system to during the migration or the Linux distribution to convert the target system to during the migration |
| **SQL Modernization (Windows Only)** | The Microsoft SQL Server version to upgrade the SQL Server to  |

### Security Settings


| Name | Description |
|------|-------------|
| **Enable Disk Encryption**| The target AWS region for the migrated server |
| **Security Groups** | The AWS instance type used for the EC2 instance the source server is migrated to |
| **IAM Role** | The AWS instance type used for the EC2 instance the source server is migrated to |
| **Enable OS Hardening** | The AWS instance type used for the EC2 instance the source server is migrated to |


### Advanced Settings