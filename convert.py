with open("words.txt", "r") as file:
    f = file.read()
    words = f.split()
    #print(words)
    string = "const words = ["
    for i in range(len(words)):
        words[i] = words[i].upper()
        string += '"' + words[i] + '",'
    string += "];"
    with open("words.js", "w") as output:
        output.write(string)

print("finished")
