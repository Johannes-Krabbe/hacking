
import subprocess

def find_mx_records(subdomains, base_domain):
    for sub in subdomains:
        domain = f"{sub}.{base_domain}"
        result = subprocess.run(["dig", "+short", "mx", domain], capture_output=True, text=True)
        if result.stdout:
            print(f"MX records for {domain}:\n{result.stdout}")

if __name__ == "__main__":
    subdomains = ["mof", "mfa", "moi", "gov"]  # Add more subdomains as needed
    base_domain = "gov.ge"
    find_mx_records(subdomains, base_domain)
