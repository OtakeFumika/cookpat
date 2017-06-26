# DB設計
***
## users table
***

| column | type | option |
|:-----------|------------:|:------------:|
| name       | string      | null: false,index: true      |
| mail     | text      | null: false, unique: true        |
| image       | text        | null: false         |
| password    | text          | null: false,unique: true,index :true           |
| sex         | integer          | null: false   |
| birthday    | date          | null, false  |
| postal-code     | integer  | null, false |

## Association
- has_many :resipes
***
## recipes table
***

| column | type | option |
|:-----------|------------:|:------------:|
| name       | string      | null: false,index: true,unique: true         |
| image       | text        | null: false         |
| user_id   | integer     | foreign_key :true, index :true           |
| history      | text     |  null: false    |
| tip     | text     |    |

## Association
- belongs_to :user
- belongs_to :category
- has_many :recipe_foods
- has_many :foods, through :recipe_foods
- has_many :step
***
## step_images table
***

| column | type | option |
|:-----------|------------:|:------------:|
| image       | text        | null: false        |
| step_id   | integer     | foreign_key :true, index :true           |

## Association
- belongs_to :step
***
### steps table
***

| column | type | option |
|:-----------|------------:|:------------:|
| num      | integer     | null: false         |
| recipe_id   | integer     | foreign_key :true, index :true           |

## Association
- belongs_to :recipe
- has_many :step_images
- has_many :step_texts

***
## step_texts table
***

| column | type | option |
|:-----------|------------:|:------------:|
| text      | text     | null: false         |
| step_id   | integer     | foreign_key :true, index :true           |

## Association
- belongs_to :step

***
## foods table
***

| column | type | option |
|:-----------|------------:|:------------:|
| name     | string     | null: false     |

## Association
- has_many :recipe_foods
- has_many :recipes, through :recipe_foods

***
## recipe_foods
***

| column | type | option |
|:-----------|------------:|:------------:|
| food_id     | integer     | foreign_key :true, index :true   |
| recipe_id   | integer     | foreign_key :true, index :true           |

## Association
- belongs_to :recipe
- belongs_to :food

***
## categorys table
***

| column | type | option |
|:-----------|------------:|:------------:|
| name    | text    |  index :true   |
| parent_id   | integer     | index :true           |

## Association
- has_many :recipes
- belongs_to :parent, class_name: Category, foreign_key: "parent_id"
- has_many :children, class_name: Category, foreign_key: "parent_id"





