class Blog
  include Mongoid::Document
  field :title, type: String
  field :description, type: String
  field :duedate, type: Integer
end
