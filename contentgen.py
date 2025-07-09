import os
from jinja2 import Environment, FileSystemLoader
import yaml

environment = Environment(loader=FileSystemLoader("general_content"))

# load templates and render them in the desitnation directory
def render_template(template_name, context, destination_folder):
    template = environment.get_template(template_name)

    rendered_content = template.render(context)
    print(rendered_content)
    # remove .j2 extension from destination_path
    if template_name.endswith('.j2'):
        destination_path = template_name[:-3]

    with open(os.path.join(destination_folder, destination_path), 'w') as f:
        f.write(rendered_content)


# parse data.yaml file to get the data
with open("data.yaml", 'r') as file:
    data = yaml.safe_load(file)

# iterate through data[clouds] to render templates
for cloud in data['clouds']:
    cloud_name = cloud['name']
    print(f"Rendering templates for {cloud_name}")

    # Remove all files in the destination directory before rendering
    destination_dir = cloud['destination']
    if os.path.exists(destination_dir):
        for filename in os.listdir(destination_dir):
            file_path = os.path.join(destination_dir, filename)
            if os.path.isfile(file_path):
                os.remove(file_path)

    # iterate through all files in the general_content directory
    for file_name in os.listdir("general_content"):
        destination_path = file_name[:-3]
        print(f"Rendering {file_name} to {destination_path}")
        render_template(file_name, cloud, cloud['destination'])