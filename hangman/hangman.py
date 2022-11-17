import random
attempts = 5
words = ["Bigworld","Smallword","Nicepeople"]
word = random.choice(words)
correct_guessed = []
while True:
    if attempts == 0:
        print("GAME OVER!")
        break
    for i in word:
        if i in correct_guessed:
            print(i,end=" ")
        else:
            print("*",end=" ")
    print("\n")
    print("Attempts = " + str(attempts))
    guess = input("Please enter your guess here.")
    if guess in correct_guessed:
        print("This word is already used")
    elif guess in word:
        print("yes")
        correct_guessed.append(guess)
    else:
        print("no")
        correct_guessed.append(guess)
        attempts-=1

