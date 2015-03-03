# -*- coding: utf-8 -*-
"""
Created on Mon Mar  2 17:44:38 2015

@author: zeke
"""

import csv
import fiona


in_shape= fiona.open('../data/census_2011/final_shape_prj.shp','r')
keys = []
for rec in in_shape:
    keys.append(rec['properties']['DAUID'])
    keys.append(rec['properties']['CTUID'])

bc501 = csv.DictReader(open('/home/zeke/data//98-316-XWE2011001-1501-BC.csv','rb'),fieldnames=['Geo_Code', 'Prov_name', 'Geo_nom', 'Topic', 'Characteristic', 'Note', 'Total', 'Flag_total', 'Male', 'Flag_Male', 'Female', 'Flag_Female'])
ab501 = csv.DictReader(open('/home/zeke/data/98-316-XWE2011001-1501-ALTA.csv','rb'),fieldnames=['Geo_Code', 'Prov_name', 'Geo_nom', 'Topic', 'Characteristic', 'Note', 'Total', 'Flag_total', 'Male', 'Flag_Male', 'Female', 'Flag_Female'])

bc401 = csv.DictReader(open('/home/zeke/data/99-004-XWE2011001-401-BC.csv','rb'),fieldnames=['Geo_Code', 'Prov_Name', 'CMA_CA_Name', 'CT_Name', 'GNR', 'Topic', 'Characteristic', 'Note', 'Total', 'Flag_Total', 'Male', 'Flag_Male', 'Female', 'Flag_Female'])
ab401 = csv.DictReader(open('/home/zeke/data/99-004-XWE2011001-401-ALTA.csv','rb'),fieldnames=['Geo_Code', 'Prov_Name', 'CMA_CA_Name', 'CT_Name', 'GNR', 'Topic', 'Characteristic', 'Note', 'Total', 'Flag_Total', 'Male', 'Flag_Male', 'Female', 'Flag_Female'])
f501 =open('/home/zeke/data/super_secret/data/501.csv','wb')
f401 = open('/home/zeke/data/super_secret/data/401.csv','wb')
out501 = csv.DictWriter(f501,fieldnames=['Geo_Code', 'Prov_name', 'Geo_nom', 'Topic', 'Characteristic', 'Note', 'Total', 'Flag_total', 'Male', 'Flag_Male', 'Female', 'Flag_Female'])
out401 = csv.DictWriter(f401,fieldnames=['Geo_Code', 'Prov_Name', 'CMA_CA_Name', 'CT_Name', 'GNR', 'Topic', 'Characteristic', 'Note', 'Total', 'Flag_Total', 'Male', 'Flag_Male', 'Female', 'Flag_Female'])



def mergetables(t1,t2,out):
    rows = []
    c = 0
    firstline = True #skip first line of the csv file as it is just the heading      
    for row in t1:
        if row['Geo_Code'] in keys:
            rows.append(row)
            print "Added ",c,' rows'
    for row in t2:
        if row['Geo_Code'] in keys:
            if firstline:
                firstline = False
                continue
            else:
                rows.append(row)
                print "Added ",c,' rows'
    print "Writing Rows"
    out.writerows(rows)




mergetables(bc501,ab501,out501)
mergetables(bc401,ab401,out401)
f501.close()
f401.close()