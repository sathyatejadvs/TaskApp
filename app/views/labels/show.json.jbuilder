# json.partial! "labels/label", label: @label
json.extract! label, :id, :name
json.url label_url(label, format: :json)