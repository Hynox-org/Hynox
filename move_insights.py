with open("app/services/social-media-marketing/page.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "6b. PROOF OF PERFORMANCE / VIEW INSIGHTS" in line:
        start_idx = i
    if start_idx != -1 and "</section>" in line and i > start_idx + 10:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    insights_lines = lines[start_idx:end_idx+1]
    del lines[start_idx:end_idx+1]
    
    target_idx = -1
    for i, line in enumerate(lines):
        if "2. WHAT WE BUILD" in line:
            target_idx = i
            break
            
    if target_idx != -1:
        lines = lines[:target_idx] + ["\n"] + insights_lines + ["\n"] + lines[target_idx:]
        
        with open("app/services/social-media-marketing/page.tsx", "w", encoding="utf-8") as f:
            f.writelines(lines)
        print("Moved successfully")
    else:
        print("Target not found")
else:
    print(f"Start: {start_idx}, End: {end_idx}")
