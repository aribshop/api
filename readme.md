# Arib.shop API

an express app that serve as API for `arib.shop` & `app.arib.shop`


this API follow custom version DDD, where the probelm is splitted into multiple domains

[documentation](https://documenter.getpostman.com/view/17856894/2s8YmEzSFA#ed06620a-2c8f-4a91-8b04-2d08bd791f5b)

## Domains

### User
1. get Stuff
2. get Client
3. get Notification
4. 

### Site
1. get site data
2. get avaliable templates
3. create site
4. create new product
5. get products

### chain
1. get lines
2. move order
    oder need to be confirmed before it get moved to next line


### payment



# tasks

<!-- todo  addGroup Vs associateGroup Vs linkGroup-->
<!-- todo add route to get all confirmation for specific order -->

# Template

each website has its own template

a template represents:
1. the website design
2. the data website contains

## Template gallery 

currently we will work only on two types of templates

### E-commerce

1. simple home page that serve as product catalogue
2. product page, show the description
3. buy product page, side to side pages, one for showing product overview, and page for inserting the buyer information


### Landing Page

1. one landing page line notion, background picture, profile picture, title, two sections, and contact us 

for now, we stick to two sections

a section is mainly, title, description, photo

#### Custom product

landing page don't have a specific product (one size doesn't fit all)

instead, we will have a custom product, its like a form with multiple fields 

