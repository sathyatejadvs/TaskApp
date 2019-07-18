class BlogsController < ApplicationController
	before_action :set_album, only: [:show, :edit]
	def index
		@blog = Blog.all
	end

	def new
		@blogs = Blog.new
	end

	def set_album
		@blog = Blog.find(params[:id])
	end
end
