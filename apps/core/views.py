from django.views.generic import TemplateView


class EmbedView(TemplateView):
    template_name = 'embed.html'
