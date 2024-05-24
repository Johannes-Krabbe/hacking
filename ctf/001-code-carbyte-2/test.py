import hashlib

# Given hash
hash_to_crack = "4b57b34a1855d0d9137d36023156717c"

# List of common names on Norwegian Air Shuttle tail fins
names = [
    "Roald Amundsen", "Sonja Henie", "Henrik Ibsen", "Edvard Munch", "Greta Garbo",
    "Knut Hamsun", "Edith Cavell", "Victor Borge", "Max Manus", "Fridtjof Nansen"
]

# Function to hash a given name
def hash_name(name):
    return hashlib.md5(name.encode()).hexdigest()

# Try each name
for name in names:
    if hash_name(name) == hash_to_crack:
        print(f"The password is: {name}")
        break
else:
    print("Password not found in the list")
