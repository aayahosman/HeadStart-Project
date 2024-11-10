'''
study guides 
'''

import requests
from bs4 import BeautifulSoup

'''
making study guides

type has to be front end

userFile is front end
'''

'''
GLOBAL VARIABLES
'''


_difficulty = 0 # private variable capturing difficulty
_userFile = ''
_textPaste = ''
_linkURL = ''
_paste = False
_uploadFile = False
_URL = False



'''

GETTERS AND SETTERS!

'''

def getPaste():
    return _paste

def setPaste():
    _paste = True
    return _paste

def getUpload():
    return _uploadFile

def setUpload():
    _uploadFile = True
    return _uploadFile

def getURL():
    return _URL

def setURL():
    _URL = True
    return _URL

def getFile():
    return _userFile

def setFile(filename):
    _userFile = filename
    return _userFile

def getDifficulty():
    return _difficulty

def setDifficulty(num):
    _difficulty = num
    return _difficulty

def getTextPaste():
    return _textPaste

def setTextPaste(text):
    _textPaste = text
    return _textPaste



'''

FUNCTION FUNCTIONS!

'''


def noteDeterminer(type):
    if type == "paste":
        setPaste()
    elif type == "upload":
        setUpload()
        inputFile(_userFile)
    elif _URL:
        setURL()



'''
accesses and opens the students notes if they upload a PDF file
'''
def inputFile(filename):
    with open(filename, 'r') as inFile:
        text = inFile.readlines()
        textLines = text.split(".")
        return textLines
    
'''
parses text pasted by user
'''
def parseText(_textPaste):
    textList = _textPaste.split(".")
    return textList

'''
opens and access link and put its into a list 
'''
def accessLink(links):
    linkText = requests.get(links)
    html = BeautifulSoup(linkText.text, 'html.parser')
    strippedTML = html.get_text(' ', strip = True)
    listedTML =  strippedTML.split(".")
    return listedTML
