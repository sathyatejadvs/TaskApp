class BlogsController < ApplicationController
	before_action :set_album, only: [:show, :edit]
	def index
		@blogs = Blog.all
	end

	def new
		@blog = Blog.new
	end
	def create
    @blog = Blog.new(params.require(:blog).permit(:title, :description, :duedate))

    respond_to do |format|
      if @blog.save
        format.html { redirect_to blogs_path, notice: 'Your Blog item is now live.' }
      else
        format.html { render :new }
      end
    end
  end

	def set_album
		@blog = Blog.find(params[:id])
	end
end
