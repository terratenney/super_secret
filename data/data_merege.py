# -*- coding: utf-8 -*-
"""
Created on Thu Mar  5 05:22:05 2015

@author: rep
"""

import os

files = os.listdir('.')


out = open('edmon_data'+'.'+'js','w')
for f in files:
    if f.startswith('ed') and f.endswith('json'):
        name,ex = f.split('.')
        
        fl = open(f,'r').read()
        s = 'var '+name+' =['+fl+' ];\n'
        out.write(s)
        print name
out.close()