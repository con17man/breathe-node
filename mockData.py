
import urllib2
import threading
import random

# MOCK DATA
def temp():
    return round(random.uniform(19, 35),1)

def hmd():
    return round(random.uniform(31, 32),1)

def presure():
    return round(random.uniform(676, 676.9), 2)

def lpg():
    return round(random.uniform(0.0002, 0.0003), 5)

def co():
    return round(random.uniform(0.00030, 0.00040), 5)

def smoke():
    return round(random.uniform(0.0001, 0.0003), 5)

# temp = round(random.uniform(19, 35),1)
# hmd = round(random.uniform(31, 32),1)

def sendData():
    threading.Timer(60.0, sendData).start()

    # /rpi/:temperature/:humidity/:presure/:gas_LPG/:gas_CO/:gas_smoke
    urlSendData = 'https://pi-sensors.herokuapp.com/rpi/' + str( temp() ) + '/' + str( hmd() ) + '/' + str( presure() ) + '/' + str( lpg() ) + '/' + str( co() ) + '/' + str( smoke() )

    print urlSendData

    response = urllib2.urlopen(urlSendData)
    html = response.read()

    print html

sendData()

# Airtable https://airtable.com/invite/r/kW4qO4MQ
