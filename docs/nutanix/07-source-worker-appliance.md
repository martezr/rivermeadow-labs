# Source Worker Appliance
---
The source worker appliance is used for VM based or agentless migrations. The appliance is deployed in the source VMware vSphere cluster.

```yaml
# Enable VM-based migrations. Replace the value with 'true' if enabled.
enable_vm_based_migrations: 'true'

# vSphere Environment (required if VM-based migrations are enabled)
vsphere.environment.url: ''   # vCenter URL using IP Address
vsphere.environment.username: ''   # Username or Identity
vsphere.environment.password: ''   # Password or Secret Key

# Source Worker Appliance Deployment Configuration
vsphere.source_worker_appliance.vm_name: ''   # Source Worker VM Name
vsphere.source_worker_appliance.datacenter: ''   # Datacenter Name
vsphere.source_worker_appliance.cluster: ''   # Cluster Name
vsphere.source_worker_appliance.datastore: ''   # Datastore Name
vsphere.source_worker_appliance.resource_pool: ''   # Resource Pool Name (optional)
vsphere.source_worker_appliance.folder: ''   # Folder Name (optional)

# Source Worker Appliance Deployment Network Configuration
vsphere.source_worker_appliance.network.name: ''   # destination_network_name
vsphere.source_worker_appliance.network.ip_type: 'dhcp'   # IP Type (dhcp, static)
vsphere.source_worker_appliance.network.ip_address: ''   # IP Address (static only)
vsphere.source_worker_appliance.network.netmask: ''   # Netmask (static only)
vsphere.source_worker_appliance.network.default_gateway: ''   # Default Gateway (static only)
vsphere.source_worker_appliance.network.primary_dns: ''   # Primary DNS (static only)
vsphere.source_worker_appliance.network.secondary_dns: ''   # Secondary DNS (optional / static only)
```