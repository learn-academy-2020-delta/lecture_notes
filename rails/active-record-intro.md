# Intro to Active Record
9/29/2020

Create a new rails app
$ rails db:create

**Generating a model**
1) rails generate model Schedule day:string date:date event:string
2) rails db:migrate


**Create**  
2.7.0 :005 > Schedule.create day: "Thursday", date: "2020-10-01", event: "Rails AMA"
2.7.0 :004 > Schedule.create day: "Wednesday", date: "2020-09-30", event: "White boarding"
2.7.0 :003 > Schedule.create day: "Tuesday", date: Date.today, event: "Yoga"
2.7.0 :002 > Schedule.create day: "Thursday", date: "2020-10-01", event: "Office Hours"

**Read**  
All the entries
2.7.0 :006 > Schedule.all

One entry
2.7.0 :007 > Schedule.first
2.7.0 :008 > Schedule.last
2.7.0 :009 > Schedule.find 2

A set of entries
2.7.0 :011 > Schedule.where day: "Thursday"

**Update**
2.7.0 :012 > ama = Schedule.find 4
2.7.0 :014 > ama.event = "Rails AMA with Zeal team"
2.7.0 :015 > ama.save

2.7.0 :018 > oh = Schedule.where(event: "Office Hours").first
2.7.0 :020 > oh.event = "Office hours with Sarah"
2.7.0 :021 > oh.save

**Delete**
.7.0 :029 > ama.destroy
