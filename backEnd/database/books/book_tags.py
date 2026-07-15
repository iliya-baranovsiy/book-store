from enum import Enum


class Tags(str, Enum):
    PYTHON: str = "#Python"
    JAVASCRIPT: str = "#JavaScript"
    CPP: str = "#C++"
    CS: str = "#C#"
    PROGRAMMING: str = "#Программирование"
    FANTASY: str = "#Фентези"
    DETECTIVE: str = "#Детектив"
    HISTORY: str = "#История"
