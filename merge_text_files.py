import re

def read_file(file_path):
    with open(file_path, 'r') as file:
        return file.readlines()

def write_file(file_path, content):
    with open(file_path, 'w') as file:
        file.writelines(content)

def merge_files(file1_content, file2_content):
    merged_content = []
    pending_content = []
    numerical_sum = 0

    all_lines = file1_content + file2_content
    unique_lines = set(all_lines)

    for line in unique_lines:
        if re.match(r'^\d+$', line.strip()):
            numerical_sum += int(line.strip())
        else:
            merged_content.append(line)

    for line in all_lines:
        if line not in unique_lines:
            pending_content.append(line)

    return merged_content, numerical_sum, pending_content

def create_summary(numerical_sum, pending_content):
    summary = []
    summary.append("\nSummary:\n")
    summary.append(f"Total Sum of Numerical Content: {numerical_sum}\n")
    summary.append("Pending Content:\n")
    summary.extend(pending_content)
    return summary

def main():
    file1_content = read_file('texto0.txt')
    file2_content = read_file('texto1.txt')

    merged_content, numerical_sum, pending_content = merge_files(file1_content, file2_content)
    summary = create_summary(numerical_sum, pending_content)

    merged_content_with_summary = merged_content + summary
    write_file('merged_texto_with_summary.txt', merged_content_with_summary)
    write_file('pending_content_log.txt', pending_content)

if __name__ == "__main__":
    main()
