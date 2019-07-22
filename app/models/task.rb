class Task
  include Mongoid::Document
  # include Mongoid::Attributes::Dynamic

  field :title, type: String
  field :description, type: String
  field :due_date, type: Date
  
  embedded_in :user

  validates :title, presence: true
  validates :description, presence: true
end
