import os
import glob
import re

service_pages = glob.glob('app/services/*/page.tsx')
for file_path in service_pages:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    count = 0
    def replace_func(match):
        global count
        if count % 2 == 0:
            res = 'className="svc-section svc-section-alt"'
        else:
            res = 'className="svc-section"'
        count += 1
        return res
        
    new_content = re.sub(r'className="svc-section(?: svc-section-alt)?"', replace_func, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {file_path}")
