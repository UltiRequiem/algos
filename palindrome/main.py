"""
 A word, phrase, number,or other sequence of characters
 which reads the same backward as forward.

 Examples:

 - mom
 - maddam
 - rubber
 - 123454321
"""


def is_palindrome(word: str|int) -> bool:
    """
    Check if a word is a palindrome
    """
    match type(word):
        case str:
            return word == word[::-1]


def main():
    print(is_palindrome("mom"))


if __name__ == "__main__":
    main()
