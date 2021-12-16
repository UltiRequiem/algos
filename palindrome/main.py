import math

def is_palindrome(text: str):
    text_len = len(text)

    for i in range(math.floor(text_len/2)):
        if text[i] != text[text_len - i - 1]:
            return False

    return True
    
def naive_palindrome(text:str):
    return text == text[::-1]
