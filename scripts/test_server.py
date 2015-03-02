# -*- coding: utf-8 -*-
"""
Created on Sun Mar  1 12:36:56 2015

@author: rep
"""

import json
import cherrypy
import census_parsing
com_profile,shapes = census_parsing.run()

html = '../atry/home.html'
class HelloWorld(object):
    def home(self):
        return open(html)
        #json.dumps(community)
    home.exposed = True
    def van_map_profiles(self):
        return json.dumps(com_profile)
    van_map_profiles.exposed = True
    def van_map_shapes(self):
        return json.dumps(shapes)
    van_map_shapes.exposed = True
    def edmon_map(self):
        pass
    
    
cherrypy.quickstart(HelloWorld(),'/',{'/':{
                'tools.staticdir.on': True,
                'tools.staticdir.dir': '/home/rep/Desktop/super_secret/atry/'
            }})