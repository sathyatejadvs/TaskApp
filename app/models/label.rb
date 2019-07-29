class Label
  include Mongoid::Document
  field :new_label, type: String
  embedded_in :tasks
end
