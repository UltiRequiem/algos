from typing import Any


def search(arr: list[Any], x: Any):
    for index, item in enumerate(arr):
        if item == x:
            return index

    return -1
