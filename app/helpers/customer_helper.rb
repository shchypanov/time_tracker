module CustomerHelper
  def change_add_button_to_edit_button(id)
    return 'Edit customer' if id
    'Add customer'
  end
end
