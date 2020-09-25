class Book

    def initialize (author='Anonymous', page=1)
        @author = author
        @page = page
    end

    def page
        @page
    end

    def read pages_read
        @page = @page + pages_read
    end

    def author
        @author
    end

    def title=title
        @title = title
    end

    def title
        @title
    end


end
