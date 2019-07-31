class Task
  include Mongoid::Document
  # include Mongoid::Attributes::Dynamic

  field :title, type: String
  field :description, type: String
  field :due_date, type: Date
  field :status, type: String, default: 'bucket1'
  
  embedded_in :user
  embeds_many :labels


  validates :title, presence: true
  validates :description, presence: true
end
