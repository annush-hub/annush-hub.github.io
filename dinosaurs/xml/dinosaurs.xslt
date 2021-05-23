<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:msxsl="urn:schemas-microsoft-com:xslt"
exclude-result-prefixes="msxsl">

	<xsl:template match = "dinolist">
		<html><head><title>Dinosaurs</title></head>
		<body><h1>Dinosaurs</h1>
		<xsl:apply-templates select = "dinosaur"/>
		</body></html>
	</xsl:template>

	<xsl:template match = "dinosaur">
		<h2><xsl:value-of select="name"/></h2>
		<table border ="1" width = "400" cellpadding = "5">
		<tr>
			<th>Period</th>
			<td><xsl:value-of select="@period"/></td>
		</tr>
		<tr>
			<th>Group</th>
			<td><xsl:value-of select="group"/></td>
		</tr>		
		<xsl:apply-templates select = "range"/>
		<xsl:apply-templates select = "physio"/>
		</table>
	</xsl:template>

	<xsl:template match = "range">
		<tr>
			<th>Range</th>
			<td>
			<ul>
			<xsl:for-each select="region">
				<li><xsl:value-of select="."/></li>
			</xsl:for-each>
			</ul>
			</td>
		</tr>
	</xsl:template>

	<xsl:template match = "physio">
		<xsl:if test ="length">
			<tr>
			<th>Length</th>
			<td>
			<xsl:value-of select="length"/>
			<xsl:text disable-output-escaping = "yes">
			&amp;nbsp;
			</xsl:text>
			<xsl:value-of select="length/@unit"/>
			</td>
			</tr>
		</xsl:if>
		<xsl:if test ="weight">
			<tr>
			<th>Weight</th>
			<td>
			<xsl:value-of select="weight"/>
			<xsl:text disable-output-escaping = "yes">
			&amp;nbsp;
			</xsl:text>
			<xsl:value-of select="weight/@unit"/>
			</td>
			</tr>
		</xsl:if>
			<tr>
			<th>Diet</th>
			<td>
			<xsl:value-of select="diet"/>
			</td>
			</tr>
	</xsl:template>
</xsl:stylesheet>